import { CardProps } from "./interfaces";
import { WrapperCard, CardInformation, DataLabel } from "./StyledCard";

export const Card = ({ title, year, type, poster, children }: CardProps) => {
  return (
    <>
      <WrapperCard>
        <img src={poster} alt={title} />
        <CardInformation>
          <h3>{title}</h3>
          <DataLabel>
            <span>Año de lanzamiento:</span> {year}
          </DataLabel>
          <DataLabel>
            <span>Categoría:</span> {type}
          </DataLabel>
          {children}
        </CardInformation>
      </WrapperCard>
    </>
  );
};
