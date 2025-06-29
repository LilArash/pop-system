import { CommentComponent } from "../components/CommentComponent";
import { StaticMap } from "../components/StaticMap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
export function UserSurveyInfo() {
    const [survey, setSurvey] = useState(null);

    useEffect(() => {
        fetch("/UserSurveyInfo.json")
            .then((res) => {
                if (!res.ok) throw new Error("خطا در پاسخ سرور");
                return res.json();
            })
            .then((data) => {
                setSurvey(data);
                console.log(data)
                console.log(survey);

            })
            .catch((err) => {
                console.error("خطا در دریافت داده:", err);
            });
    }, []);

    if (!survey) {
        return <p className="text-gray-500">در حال بارگذاری اطلاعات نظرسنجی...</p>;
    }

    return (
        <div className="m-4 flex flex-col">
            <div className="flex gap-2 text-gray-400 items-center m-4">
                <FontAwesomeIcon className="text-gray-500" icon={faArrowRight} />
                <span>بازگشت به صفحه نظرات</span>
            </div>
            {survey ? (
                <StaticMap latitude={survey.latitude} longitude={survey.longitude} />
            ) : (
                <p className="text-sm text-gray-500">در حال بارگذاری نقشه...</p>
            )}
            <div className="mt-4 space-y-4">
                <h2 className="text-3xl text-gray-700">{survey.title}</h2>
                <p className="text-xl text-gray-400">{survey.text}</p>
            </div>
            <CommentComponent />
        </div>
    )
}