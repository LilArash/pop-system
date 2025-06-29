import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons"

export function CommentComponent() {
   

    return (
        <form className="flex flex-col justify-center gap-6 mt-8">
            <div className="flex justify-between items-center">
                <div className="flex gap-4 text-lg font-semibold">
                    <div className="text-green-500 items-center flex gap-2 cursor-pointer">
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <p>موافقم</p>
                    </div>
                    <div className="text-red-500 items-center flex gap-2 cursor-pointer">
                        <FontAwesomeIcon className="fill-none" icon={faThumbsDown} />
                        <p>مخالفم</p>
                    </div>
                </div>
                <button className="px-6 py-2 border text-green-500 border-green-500 rounded-lg
                hover:bg-green-500 hover:text-white transition-colors" type="submit">
                    ثبت نظر
                </button>
            </div>
            <textarea rows="7" placeholder="نظر خود را بنویسید..."
                className="rounded-lg p-2 text-gray-700 border border-gray-200 focus:outline-none focus:border-green-500" name="" id="">

            </textarea>
        </form>
    )
}