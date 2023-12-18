export default function Card({icon, title, para, para1}){
    return (
      <div className="max-w-sm mb-6 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="mb-10 mt-2">
        {icon}
      </div>
      <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        {para}
      </p>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        {para1}
      </p>
    </div>
    

    )
}