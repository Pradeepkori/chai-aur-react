function Card({userName, userJob,userImg}){
    console.log(userName)
    return(
        <>
        <div className="bg-blue-600 flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
        <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://rukminim3.flixcart.com/image/850/1000/l1mh7rk0/poster/0/d/h/medium-shinchan-cartoon-wall-poster-decorative-poster-for-original-imagd5f6m5zwvhhy.jpeg?q=90&crop=false" alt="" />
        <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://i.pinimg.com/736x/f5/61/88/f56188980615ee32fe42d4fd597b3ca3.jpg" alt=""/>
        <div className="space-y-2 text-center sm:text-left">
            <div className="space-y-0.5">
            <p className="text-lg font-semibold text-black">{userName}</p>
            <p className="font-medium text-black-500">{userJob}</p>
            </div>
            <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
            Message
            </button>
        </div>
        </div>
        </>
    );
}
export default Card