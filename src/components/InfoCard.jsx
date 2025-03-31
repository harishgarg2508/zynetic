const InfoCard = ({ icon, label, value }) => (
    <div className="flex items-center">
      <div className='animate-bounce'>
      {icon}
      </div>
      <div className="ml-2">
        <p className="text-sm text-gray-400">{label}</p>
        <p className="text-lg font-semibold">{value}</p>
      </div>
    </div>
  );

  export default InfoCard