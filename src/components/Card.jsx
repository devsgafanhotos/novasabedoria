export default function Card({ title, description, image }) {
  return (
    <div className=" w-3xl sm:w-64 md:w-72 lg:w-80 p-4 m-4 bg-white rounded-lg shadow-md text-center ">
      <img src={image} alt={title} className="w-full object-contain" />
      <h3 className="text-xl font-semibold mt-2 ">{title}</h3>
      <p className="text-gray-700 ">{description} </p>
    </div>
  );
}
