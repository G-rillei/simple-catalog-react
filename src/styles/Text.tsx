import styled from "styled-components";
import { IFlexProps } from "./Flex";

interface ITextProps extends IFlexProps {
  children: React.ReactNode;
  className?: string;

  //Text Properties
  fontSize?: number;
  fontWeight?: number;
  fontStyle?: string;
  textAlign?: string;
  textTransform?: string;
  textDecoration?: string;
  color?: string;
  lineHeight?: number;
  letterSpacing?: number;
  textShadow?: string;
}

export const TextView = styled.span`
  font-size: ${(props: ITextProps) =>
    props.fontSize ? props.fontSize : "inherit"};
  ${(props: ITextProps) => props.fontSize && `font-size: ${props.fontSize}px;`}
  font-weight: ${(props: ITextProps) =>
    props.fontWeight ? props.fontWeight : "inherit"};
  font-style: ${(props: ITextProps) =>
    props.fontStyle ? props.fontStyle : "inherit"};
  text-align: ${(props: ITextProps) =>
    props.textAlign ? props.textAlign : "inherit"};
  text-transform: ${(props: ITextProps) =>
    props.textTransform ? props.textTransform : "inherit"};
  text-decoration: ${(props: ITextProps) =>
    props.textDecoration ? props.textDecoration : "inherit"};
  color: ${(props: ITextProps) => (props.color ? props.color : "inherit")};
  line-height: ${(props: ITextProps) =>
    props.lineHeight ? props.lineHeight : "inherit"};
  letter-spacing: ${(props: ITextProps) =>
    props.letterSpacing ? props.letterSpacing : "inherit"};
  text-shadow: ${(props: ITextProps) =>
    props.textShadow ? props.textShadow : "inherit"};
  font-family: "Poppins", sans-serif;

  ${(props: IFlexProps) => props.row && `flex-direction: row;`}
  ${(props: IFlexProps) => props.column && `flex-direction: column;`}
    ${(props: IFlexProps) => props.wrap && `flex-wrap: wrap;`}
    ${(props: IFlexProps) => props.justifyCenter && `justify-content: center;`}
    ${(props: IFlexProps) =>
    props.justifyAround && `justify-content: space-around;`}
    ${(props: IFlexProps) =>
    props.justifyBetween && `justify-content: space-between;`}
    ${(props: IFlexProps) =>
    props.justifyEvenly && `justify-content: space-evenly;`}
    ${(props: IFlexProps) => props.alignCenter && `align-items: center;`}
    ${(props: IFlexProps) => props.alignAround && `align-items: space-around;`}
    ${(props: IFlexProps) =>
    props.alignBetween && `align-items: space-between;`}
    ${(props: IFlexProps) => props.alignEvenly && `align-items: space-evenly;`}
    ${(props: IFlexProps) => props.flex && `flex: ${props.flex};`}

    ${(props: IFlexProps) => props.width && `width: ${props.width};`}
    ${(props: IFlexProps) => props.height && `height: ${props.height};`}
    ${(props: IFlexProps) => props.minWidth && `min-width: ${props.minWidth};`}
    ${(props: IFlexProps) =>
    props.minHeight && `min-height: ${props.minHeight};`}
    ${(props: IFlexProps) => props.maxWidth && `max-width: ${props.maxWidth};`}
    ${(props: IFlexProps) =>
    props.maxHeight && `max-height: ${props.maxHeight};`}
    ${(props: IFlexProps) =>
    props.size && `width: ${props.size}; height: ${props.size};`}

    ${(props: IFlexProps) => props.m && `margin: ${props.m}px;`}
    ${(props: IFlexProps) => props.mt && `margin-top: ${props.mt}px;`}
    ${(props: IFlexProps) => props.mr && `margin-right: ${props.mr}px;`}
    ${(props: IFlexProps) => props.mb && `margin-bottom: ${props.mb}px;`}
    ${(props: IFlexProps) => props.ml && `margin-left: ${props.ml}px;`}
    ${(props: IFlexProps) =>
    props.mx && `margin-left: ${props.mx}px; margin-right: ${props.mx}px;`}
    ${(props: IFlexProps) =>
    props.my && `margin-top: ${props.my}px; margin-bottom: ${props.my}px;`}

    ${(props: IFlexProps) => props.p && `padding: ${props.p}px;`}
    ${(props: IFlexProps) => props.pt && `padding-top: ${props.pt}px;`}
    ${(props: IFlexProps) => props.pr && `padding-right: ${props.pr}px;`}
    ${(props: IFlexProps) => props.pb && `padding-bottom: ${props.pb}px;`}
    ${(props: IFlexProps) => props.pl && `padding-left: ${props.pl}px;`}
    ${(props: IFlexProps) =>
    props.px && `padding-left: ${props.px}px; padding-right: ${props.px}px;`}
    ${(props: IFlexProps) =>
    props.py &&
    `padding-top: ${props.py}px; padding-bottom: ${props.py}px;`}    

    ${(props: IFlexProps) => props.border && `border: ${props.border};`}
    ${(props: IFlexProps) =>
    props.borderTop && `border-top: ${props.borderTop};`}
    ${(props: IFlexProps) =>
    props.borderRight && `border-right: ${props.borderRight};`}
    ${(props: IFlexProps) =>
    props.borderBottom && `border-bottom: ${props.borderBottom};`}
    ${(props: IFlexProps) =>
    props.borderLeft && `border-left: ${props.borderLeft};`}
    ${(props: IFlexProps) =>
    props.borderRadius && `border-radius: ${props.borderRadius};`}
    ${(props: IFlexProps) =>
    props.borderTopLeftRadius &&
    `border-top-left-radius: ${props.borderTopLeftRadius};`}
    ${(props: IFlexProps) =>
    props.borderTopRightRadius &&
    `border-top-right-radius: ${props.borderTopRightRadius};`}
    ${(props: IFlexProps) =>
    props.borderBottomLeftRadius &&
    `border-bottom-left-radius: ${props.borderBottomLeftRadius};`}
    ${(props: IFlexProps) =>
    props.borderBottomRightRadius &&
    `border-bottom-right-radius: ${props.borderBottomRightRadius};`}
    ${(props: IFlexProps) =>
    props.borderColor && `border-color: ${props.borderColor};`}

    ${(props: IFlexProps) =>
    props.background && `background: ${props.background};`}
    ${(props: IFlexProps) =>
    props.backgroundImage && `background-image: ${props.backgroundImage};`}
    ${(props: IFlexProps) =>
    props.backgroundSize && `background-size: ${props.backgroundSize};`}
    ${(props: IFlexProps) =>
    props.backgroundRepeat && `background-repeat: ${props.backgroundRepeat};`}
    ${(props: IFlexProps) =>
    props.backgroundPosition &&
    `background-position: ${props.backgroundPosition};`}
    ${(props: IFlexProps) =>
    props.backgroundAttachment &&
    `background-attachment: ${props.backgroundAttachment};`}
    ${(props: IFlexProps) =>
    props.backgroundColor && `background-color: ${props.backgroundColor};`}
`;
