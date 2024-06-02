export default function SectionTitle({title}) {
  return (
    <div className="flex items-center justify-center w-full">
      <h1 className="flex items-center justify-center text-2xl font-bold text-center text-purple-500 uppercase md:text-3xl lg:text-4xl">
        <img src="/plant-amico.svg" className="w-16" alt="" />
        {title}
        <img src="/plant-amico.svg" className="w-16" alt="" />
      </h1>
    </div>
  );
}
