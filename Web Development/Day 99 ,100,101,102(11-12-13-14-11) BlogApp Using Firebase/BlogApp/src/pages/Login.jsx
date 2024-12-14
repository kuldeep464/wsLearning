import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { LoginContext } from '../MainContext';

export default function Login() {
    let {userinfo,setUserInfo}=useContext(LoginContext)
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    let navigate=useNavigate()

    let googleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                let obj={
                    token,
                    user
                }
                setUserInfo(obj)
                navigate('/')
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }




    return (
        <div>
            <main className=" flex min-h-screen  items-center  justify-center  text-black">
                <section>
                    <form>
                        <div className="flex md:w-[30rem]   flex-col space-y-12">
                            <div className="text-center text-4xl font-medium">Log In</div>
                            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"><input type="text" required="" name="email" placeholder="Email or Username" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" /></div>
                            <div className="w-full transform relative border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                                <input type="password" required="" name="password" placeholder="Password" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path>
                                </svg>
                            </div>
                            <button className="transform btn-color rounded-sm text-white    py-2 font-bold ">LOG IN</button>
                        </div>
                    </form>
                    <div className="text-center  flex flex-col gap-4  mt-8">
                        <h1>or</h1>
                        <button onClick={googleLogin} className="google-btn-color flex justify-center  gap-4 text-xl items-center hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z"></path>
                            </svg>
                            Continue with Google
                        </button>
                    </div>
                    <p className="text-center mt-4 cursor-pointer text-lg">No account?<span className="font-medium text-indigo-500 ml-4 underline underline-offset-4 hover:underline"> <Link to={'/register'}>Create One</Link> </span></p>
                </section>
            </main>
        </div>
    )
}
