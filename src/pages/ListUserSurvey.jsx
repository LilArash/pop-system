import { useEffect, useState } from "react";
import { UserSurveyCard } from "../components/UserSurveyCard";

export function ListUserSurvey() {

    const [surveys, setSurveys] = useState([]);

    useEffect(() => {
        fetch("/ListUsersSurvey.json")
            .then((res) => res.json())
            .then((data) => {setSurveys(data.surveys)
                console.log(data)
            })
            .catch((err) => console.error("خطا در دریافت داده:", err));
            
    }, []);

    return (
       <div className="flex gap-4 m-4">
            {surveys.map((survey) => {
                return (
                    <UserSurveyCard key={survey.surveyId} surveyId={survey.surveyId} 
                        title={survey.title}
                        description={survey.description}
                        latitude={survey.latitude}
                        longitude={survey.longitude}
                        createAt={survey.createAt}
                        endAt={survey.endAt}
                        status={survey.status}
                    />
                )
            })}
       </div>
    )
}