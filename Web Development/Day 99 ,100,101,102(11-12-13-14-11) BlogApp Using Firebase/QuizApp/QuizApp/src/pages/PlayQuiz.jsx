import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";

export default function PlayQuiz() {
    let [allQuestion, setAllQuestion] = useState([])

    useEffect(() => {
        const db = getDatabase();
        const allQuestionRef = ref(db, 'Quiz/');
        onValue(allQuestionRef, (snapshot) => {
            const data = snapshot.val();
            let finalQuestion = []
            for (let key in data) {
                finalQuestion.push(data[key])
            }
            setAllQuestion(finalQuestion)
        });


    }, [])




    return (
        <div>
            <div className='max-w-[500px] mx-auto mt-16'>
                <h1 className='text-center text-[30px] tracking-wider py-10 font-semibold underline text-blue-900'>PlayQuiz</h1>

                {allQuestion.length >= 1 ?

                    allQuestion.map((question, index) => {
                        return (
                            <QuizQuestion question={question} index={index} key={index} />
                        )
                    })
                    :
                    ''
                }



            </div>
        </div>
    )
}

function QuizQuestion({ question, index }) {
    let [cAns, setcAns] = useState('')
    let [pureAns, setPureAns] = useState('')
    let correctAns = question.correctAns
    let finalAns = ''
    if (correctAns == 'A' || correctAns == 'a') {
        finalAns = question.option1
    }
    if (correctAns == 'B' || correctAns == 'b') {
        finalAns = question.option2
    }
    if (correctAns == 'C' || correctAns == 'c') {
        finalAns = question.option3
    }
    if (correctAns == 'D' || correctAns == 'd') {
        finalAns = question.option4
    }
    return (
        <div className='p-3 my-3 bg-gray-300'>
            <div>
                <h2 className='text-[20px] py-2 font-semibold'>{index + 1} {question.question}</h2>
            </div>
            <ul>

                <li className={`bg-gray-800 p-2 my-3 text-white cursor-pointer ${question.option1 == cAns ? 'bg-green-500' : (cAns == 1) ? 'bg-red-500' : ''}  ${pureAns == question.option1 ? 'bg-green-500' : ''} `}
                    onClick={(event) => {
                        let userAns = event.target.innerHTML.trim()
                        if (userAns == finalAns) {
                            setcAns(userAns)
                        }
                        else {
                            setcAns(1)
                        }
                        setPureAns(finalAns)
                    }}

                >{question.option1}</li>


                <li className={`bg-gray-800 p-2 my-3 text-white cursor-pointer ${question.option2 == cAns ? 'bg-green-500' : (cAns == 2) ? 'bg-red-500' : ''}  ${pureAns == question.option2 ? 'bg-green-500' : ''} `}
                    onClick={(event) => {
                        let userAns = event.target.innerHTML.trim()
                        if (userAns == finalAns) {
                            setcAns(userAns)
                        }
                        else {
                            setcAns(2)
                        }
                        setPureAns(finalAns)
                    }}

                >{question.option2}</li>


                <li className={`bg-gray-800 p-2 my-3 text-white cursor-pointer ${question.option3 == cAns ? 'bg-green-500' : (cAns == 3) ? 'bg-red-500' : ''}  ${pureAns == question.option3 ? 'bg-green-500' : ''} `}
                    onClick={(event) => {
                        let userAns = event.target.innerHTML.trim()
                        if (userAns == finalAns) {
                            setcAns(userAns)
                        }
                        else {
                            setcAns(3)
                        }
                        setPureAns(finalAns)
                    }}

                >{question.option3}</li>


                <li className={`bg-gray-800 p-2 my-3 text-white cursor-pointer ${question.option4 == cAns ? 'bg-green-500' : (cAns == 4) ? 'bg-red-500' : ''}  ${pureAns == question.option4 ? 'bg-green-500' : ''} `}
                    onClick={(event) => {
                        let userAns = event.target.innerHTML.trim()
                        if (userAns == finalAns) {
                            setcAns(userAns)
                        }
                        else {
                            setcAns(4)
                        }
                        setPureAns(finalAns)
                    }}

                >{question.option4}</li>
            </ul>
        </div>
    )
}
