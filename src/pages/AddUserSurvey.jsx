import Cookies from "js-cookie";
import { MapPicker } from "../components/MapPicker"
import { useState } from "react"
export function AddUserSurvey() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!location) return alert("لطفاً مکان را انتخاب کنید");

        const payload = {
            titel: title,
            text: description,
            latitude: location.lat.toString(),
            longitude: location.lng.toString(),
        };

        try {
            const response = await fetch("http://localhost/Survey/User/Add", {
                method: "POST",
                headers: {
                    authorization: `Bearer ${Cookies.get("token")}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();
            console.log(" پاسخ سرور:", result);
            
        } catch (err) {
            console.error(" خطا در ارسال:", err);
        }
    }
    return (
        <div className="m-4">
            <form onSubmit={handleSubmit} action="">
                <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <input className="border text-gray-700 border-gray-200 p-2 rounded-lg focus:outline-none focus:border-green-500"
                            type="text" placeholder="موضوع نظرسنجی..."
                            value={title} onChange={(e) => setTitle(e.target.value)} />
                        <textarea className="border text-gray-700 border-gray-200 p-2 rounded-lg focus:outline-none focus:border-green-500"
                            name="" id="" rows="15" placeholder="نظر خود را بنویسید"
                            value={description} onChange={(e) => setDescription(e.target.value)}>

                        </textarea>
                    </div>
                    <MapPicker onSelectLocation={setLocation} />
                </div>
                <button className="w-full mt-8 p-2 rounded-lg bg-white outline-none border text-green-500 border-green-500"
                    type="submit">
                    ثبت نظر
                </button>
            </form>
        </div>
    )
}