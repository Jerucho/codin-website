interface TitleProps {
  title: string;
  description?: string;
}

export const Title = ({ title, description }: TitleProps) => {
  const arrayTitle = title.split(" ");
  const middle = Math.floor(arrayTitle.length / 2);

  return (
    <>
      {
        <h2 className="text-5xl text-center font-bold tracking-tight text-black">
          {arrayTitle.slice(0, middle).join(" ")}{" "}
          <span className="text-blue-600">
            {arrayTitle.slice(middle).join(" ")}
          </span>
        </h2>
      }
      {description && (
        <p className="text-lg text-center text-gray-600">{description}</p>
      )}
    </>
  );
};
