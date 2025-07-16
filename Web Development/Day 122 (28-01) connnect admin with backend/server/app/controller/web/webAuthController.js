const { transporter } = require("../../config/emailConfig");
const { newUserModel } = require("../../model/webNewUserModel")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const saltRounds = 10;
let OTPDATA = new Map()

let tokenKey=process.env.TOKENKEY

let sendOtp = async (req, res) => {
    let data = req.body
    let { userEmail } = req.body
    let checkEmail = await newUserModel.findOne({ userEmail })
    if(checkEmail){
        let insObj = {
            msg: 'Email Already Exists...!',
        }
        res.send(insObj)
    }
    else{
        try{
            let otp = (Math.random() * 99999).toString().slice(0, 4)
            OTPDATA.set('RealOtp', otp)
            const info = await transporter.sendMail({
                from: '"OTP email 👻" <kuldeeppoonia464@gmail.com>', // sender address
                to: userEmail, // list of receivers
                subject: "OTP Based Email ✔", // Subject line
                text: "Verification Code", // plain text body
                html: `<html>
                            <head>
                                <title>Verification Code</title>
                            </head>
        
                            <body>
                                <p>Dear User, <br/>
                                Your Google verification code is:</p>      		
                                <b>${otp}</b>
                                <p>
                                If you did not request this code, it is possible that someone else is trying to access the Google Account ${userEmail}. Do not forward or give this code to anyone.
                                </p>
                                <p>
                                Sincerely yours, <br/>
                                The Google Accounts team
                                </p>
                            </body>
        
                        </html>`,
            });
            let insObj = {
                status: 1,
                msg: 'Otp Sent',
            }
            res.send(insObj)
    
        }
        catch(error){
            let insObj = {
                msg: 'Something Went Wrong!',
            }
            res.send(insObj)
        }

    }
}

let webNewUserAuth = async (req, res) => {
    let { userFirstName, userLastName, userEmail, userPassword, shopFor } = req.body
    let RealOtp=OTPDATA.get("RealOtp")
    let inputOtp=req.body.OTP
    if(RealOtp==inputOtp){
        const password = bcrypt.hashSync(userPassword, saltRounds);
        let insObj = {
            userFirstName,
            userLastName,
            userEmail,
            shopFor
        }
        insObj['userPassword'] = password
        try {
    
            let newUser = new newUserModel(insObj)
    
            let insertRes = await newUser.save()
            let resObj = {
                status: 1,
                msg: "Sign up Successfully",
                insertRes
            }
            res.send(resObj)
        }
        catch (error) {
            res.send(error)
        }

    }
    else{
        let resObj = {
            status:0,
            msg: "Invalid OTP...!",
        }
        res.send(resObj)
    }
}

let loginAuth = async (req, res) => {
    let checkEmail = await newUserModel.findOne({ userEmail: req.body.userEmail })
    if (checkEmail) {
        var token = jwt.sign({ user:checkEmail },tokenKey);
        let checkDbPassword = checkEmail.userPassword
        let passwordCheck = bcrypt.compareSync(req.body.userPassword, checkDbPassword);
        if (passwordCheck) {
            let insRes = {
                status: 1,
                msg: 'Login successfully',
                token,
                checkEmail
            }
            res.send(insRes)

        }
        else {
            let insRes = {
                status: 2,
                msg: 'Invalid Password'
            }
            res.send(insRes)
        }
    }
    else {
        let insRes = {
            status: 0,
            msg: 'Invalid Email'
        }
        res.send(insRes)
    }
}

let changePassword=async(req,res)=>{
    let id=req.body.data._id
    let checkMyIdData=await newUserModel.findOne({_id:id})
    if(checkMyIdData){
        let userDbPassword=checkMyIdData.userPassword
        // console.log(userDbPassword)
        let passwordCheck = bcrypt.compareSync(req.body.oldPassword, userDbPassword);
        if(passwordCheck){
            const salt = bcrypt.genSaltSync(saltRounds);
            const password = bcrypt.hashSync(req.body.newPassword, salt);
            let finalRes= await newUserModel.updateOne({_id:id}, {$set:{userPassword:password}})
            let resObj={
                status:1,
                msg:"Password Changed Successfully",
                data:finalRes
            }
            res.send(resObj)
        }

        else{
            let resObj={
                status:0,
                msg:"Invalid Password"
            }
            res.send(resObj)
        }
    }
}


module.exports = { webNewUserAuth, loginAuth, sendOtp ,changePassword}