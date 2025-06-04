import React from 'react';
import { useSearchParams } from "react-router-dom";
import myfeelterQNA from "../../../data/allData.json";
import hyo from "../../../scss/hyo.module.scss";
//import MyFeelterResult from "./MyFeelterResult";

const MyFeelter:React.FC = () => {
    const questions = Object.entries(myfeelterQNA["myfeelterQ"]);
    //const lastQIdx = questions.length - 1;

    const [searchParams, setSearchParams] = useSearchParams();
    // 현재 질문 인덱스 가져오기 (없으면 0)
    const currQIdx = parseInt(searchParams.get("q") || "0", 10);
    // 현재까지 선택한 답변들 가져오기 (q 값 제외)
    const answers = Object.fromEntries([...searchParams.entries()].filter(([key]) => key !== "q"));

    const handleNextQ = (key:string, value:string) => {
        const updatedParams = new URLSearchParams(searchParams);
        updatedParams.set(key, value);
        updatedParams.set("q", (currQIdx + 1).toString()); // 다음 질문으로 이동
        setSearchParams(updatedParams);
        console.log("선택한 키와 값:", key, value);
    };

    const handlePrevQ = () => {
        if (currQIdx > 0) {
            const updatedParams = new URLSearchParams(searchParams);
            updatedParams.set("q", (currQIdx - 1).toString()); // 이전 질문으로 이동
            setSearchParams(updatedParams);
        }
    };

    // 모든 질문 완료 시 결과 페이지로 이동
    //if (currQIdx > lastQIdx) {
    //    return <MyFeelterResult answers={answers} />;
    //}

    const [key, item] = questions[currQIdx]


    return (
        <div>
            <div className={`p-4 border-b border-trip-gray1`}>
                <div className="flex justify-between items-center">
                    <div
                        className={`${currQIdx === 0 ? hyo.none_active : ""} ${hyo.back_btn} w-8 h-8 `}
                        onClick={handlePrevQ}
                    ></div>
                    <div className="question_num">
                        <span>{currQIdx + 1}</span><span>/{questions.length}</span>
                    </div>
                </div>
            </div>

            <form id="myfeelterForm" className={`pb-[7.5rem]`}>
                <fieldset className={`filset${key} flex-wrap gap-[1.25rem]`}>
                    <div className="flex justify-center my-5 md:my-0 md:py-[2.5rem] md:px-[1rem]  md:justify-start ">
                        <legend className={`font-semibold text-small-text xs:text-medium-text`}><span className={`text-trip-blue text-small-text xs:text-big-text font-700`}>Q{currQIdx + 1}.</span> {item.question}</legend>
                    </div>

                    <div className={`${hyo.answerBox} flex flex-wrap gap-[1.25rem] justify-center px-[1.5rem] flex-col md:flex-row ${hyo[item.className]}`}>
                        {item.answers.map((answer) => (
                            <div key={answer.value}>
                                <input
                                    type="radio"
                                    name={key}
                                    value={answer.value}
                                    id={`${key}_${answer.value}`}
                                    className="hidden"
                                    onChange={() => handleNextQ(key, answer.value)}
                                    checked={answers[key] === answer.value}
                                />
                                <label
                                    className="flex justify-center items-center"
                                    htmlFor={`${key}_${answer.value}`}
                                    style={{ backgroundImage: `url(${answer.src})` }}
                                >
                                    <span className={`relative text-semismall-text`}>{answer.label}</span>
                                </label>
                            </div>
                        ))}
                    </div>
                </fieldset>
            </form>
        </div>
    );
};
export default MyFeelter;