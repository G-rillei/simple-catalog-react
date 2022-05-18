import styled from "styled-components";
import { IFlexProps } from "./Flex";

interface IImageProps extends IFlexProps  {
    src: string;
    alt: string;
    filter?: string;
    objectFit?: string;
}


export const ImageView = styled.img`
    display: flex;

    //Image Properties

    ${(props: IImageProps) => props.filter && `filter: ${props.filter};`}
    ${(props: IImageProps) => props.objectFit && `object-fit: ${props.objectFit};`}

    ${(props: IImageProps) => props.row && `flex-direction: row;`}
    ${(props: IImageProps) => props.column && `flex-direction: column;`}
    ${(props: IImageProps) => props.wrap && `flex-wrap: wrap;`}
    ${(props: IImageProps) => props.justifyCenter && `justify-content: center;`}
    ${(props: IImageProps) => props.justifyAround && `justify-content: space-around;`}
    ${(props: IImageProps) => props.justifyBetween && `justify-content: space-between;`}
    ${(props: IImageProps) => props.justifyEvenly && `justify-content: space-evenly;`}
    ${(props: IImageProps) => props.alignCenter && `align-items: center;`}
    ${(props: IImageProps) => props.alignAround && `align-items: space-around;`}
    ${(props: IImageProps) => props.alignBetween && `align-items: space-between;`}
    ${(props: IImageProps) => props.alignEvenly && `align-items: space-evenly;`}
    ${(props: IImageProps) => props.flex && `flex: ${props.flex};`}

    ${(props: IImageProps) => props.width && `width: ${props.width};`}
    ${(props: IImageProps) => props.height && `height: ${props.height};`}
    ${(props: IImageProps) => props.minWidth && `min-width: ${props.minWidth};`}
    ${(props: IImageProps) => props.minHeight && `min-height: ${props.minHeight};`}
    ${(props: IImageProps) => props.maxWidth && `max-width: ${props.maxWidth};`}
    ${(props: IImageProps) => props.maxHeight && `max-height: ${props.maxHeight};`}
    ${(props: IImageProps) => props.size && `width: ${props.size}; height: ${props.size};`}

    ${(props: IImageProps) => props.m && `margin: ${props.m}px;`}
    ${(props: IImageProps) => props.mt && `margin-top: ${props.mt}px;`}
    ${(props: IImageProps) => props.mr && `margin-right: ${props.mr}px;`}
    ${(props: IImageProps) => props.mb && `margin-bottom: ${props.mb}px;`}
    ${(props: IImageProps) => props.ml && `margin-left: ${props.ml}px;`}
    ${(props: IImageProps) => props.mx && `margin-left: ${props.mx}px; margin-right: ${props.mx}px;`}
    ${(props: IImageProps) => props.my && `margin-top: ${props.my}px; margin-bottom: ${props.my}px;`}

    ${(props: IImageProps) => props.p && `padding: ${props.p}px;`}
    ${(props: IImageProps) => props.pt && `padding-top: ${props.pt}px;`}
    ${(props: IImageProps) => props.pr && `padding-right: ${props.pr}px;`}
    ${(props: IImageProps) => props.pb && `padding-bottom: ${props.pb}px;`}
    ${(props: IImageProps) => props.pl && `padding-left: ${props.pl}px;`}
    ${(props: IImageProps) => props.px && `padding-left: ${props.px}px; padding-right: ${props.px}px;`}
    ${(props: IImageProps) => props.py && `padding-top: ${props.py}px; padding-bottom: ${props.py}px;`}    

    ${(props: IImageProps) => props.border && `border: ${props.border};`}
    ${(props: IImageProps) => props.borderTop && `border-top: ${props.borderTop};`}
    ${(props: IImageProps) => props.borderRight && `border-right: ${props.borderRight};`}
    ${(props: IImageProps) => props.borderBottom && `border-bottom: ${props.borderBottom};`}
    ${(props: IImageProps) => props.borderLeft && `border-left: ${props.borderLeft};`}
    ${(props: IImageProps) => props.borderRadius && `border-radius: ${props.borderRadius};`}
    ${(props: IImageProps) => props.borderTopLeftRadius && `border-top-left-radius: ${props.borderTopLeftRadius};`}
    ${(props: IImageProps) => props.borderTopRightRadius && `border-top-right-radius: ${props.borderTopRightRadius};`}
    ${(props: IImageProps) => props.borderBottomLeftRadius && `border-bottom-left-radius: ${props.borderBottomLeftRadius};`}
    ${(props: IImageProps) => props.borderBottomRightRadius && `border-bottom-right-radius: ${props.borderBottomRightRadius};`}
    ${(props: IImageProps) => props.borderColor && `border-color: ${props.borderColor};`}

`