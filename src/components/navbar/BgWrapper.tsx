import Image from "next/image";

const BgWrapper = ({
  src,
  wrapperClass,
}: {
  src: string;
  wrapperClass?: string;
}) => {
  return (
    <div
      className={`absolute ${
        wrapperClass ? wrapperClass : "left-0 right-0 bottom-0"
      }`}
    >
      <Image
        className="size-full object-contain"
        src={src}
        alt={src}
        width={1200}
        height={50}
      />
    </div>
  );
};

export default BgWrapper;
