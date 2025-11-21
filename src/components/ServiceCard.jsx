const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="flex justify-center items-center flex-col  max-w-96 gap-1.5 p-3 h-full">
        <img
          src={icon}
          alt={title}
          className="w-7 h-7 object-cover"
        />    
        <h3 className=" font-alt text-2xl text-center font-bold text-white leading-10">{title}</h3>
        <p className="font-alt font-normal text-gray-text text-sm leading-4 text-center max-w-[350px] px-5">{description}</p>
    </div>
  );
};

export default ServiceCard;
