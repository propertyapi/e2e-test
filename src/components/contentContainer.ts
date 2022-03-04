import { Coords } from "./Popover"
import styled from "styled-components"

interface Props {
  coords: Coords
  className: string
}

const ContentContainer = styled.div`
    width: 177px;
    border-radius: 2px;
    box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
    position: absolute;
    margin-top: 24px;

   &.top {
    left: ${(props: Props) => props.coords.left + "px"};
    bottom: ${(props: Props) => `calc(100% - ${props.coords.bottom + props.coords.height}px)`};
    transform: translate(-25%, -75%);                                                       
   }

   &.top:before {
    content: "";
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
    position: absolute;
    right: 45%;
    bottom: -15px;
    transform: rotate(180deg);
   }

   &.topRight {
    right: ${(props: Props) => `calc(100% - ${props.coords.left + props.coords.width}px)`};
    bottom: ${(props: Props) => `calc(100% - ${props.coords.bottom + props.coords.height}px)`};
    transform: translate(0, -75%);                                                       

   }

   &.topRight:before {
    content: "";
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
    position: absolute;
    right: 10px;
    bottom: -15px;
    transform: rotate(180deg);
   }

   &.topLeft {
    left: ${(props: Props) => props.coords.left + "px"};
    bottom: ${(props: Props) => `calc(100% - ${props.coords.bottom + props.coords.height}px)`};
    transform: translate(0, -75%);
   }

   &.topLeft:before {
    content: "";
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
    position: absolute;
    left: 10px;
    bottom: -15px;
    transform: rotate(180deg);
   }

   &.bottom {
    left: ${(props: Props) => props.coords.left + "px"};
    top: ${(props: Props) => `calc(100% - ${props.coords.bottom - 10}px)`};
    transform: translate(-25%, 0px);
}

&.bottom:before {
        content: "";
        border-width: 8px;
        border-style: solid;
        border-color: transparent transparent #fff transparent;
        position: absolute;
        right: 45%;
        top: -15px;
}

&.bottomRight {
    right: ${(props: Props) => `calc(100% - ${props.coords.left + props.coords.width}px)`};
    top: ${(props: Props) => `calc(100% - ${props.coords.bottom - 10}px)`};

}

&.bottomRight:before {
    content: "";
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
    position: absolute;
    right: 10px;
    top: -15px;
}

&.bottomLeft {
    left: ${(props: Props) => props.coords.left + "px"};
    top: ${(props: Props) => `calc(100% - ${props.coords.bottom - 20}px)`};
}

&.bottomLeft:before {
    content: "";
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
    position: absolute;
    left: 10px;
    top: -15px;
}
  }

`

export default ContentContainer