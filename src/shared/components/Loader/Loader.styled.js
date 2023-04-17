import styled from 'styled-components';

export const StyledLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.2);
  opacity: 1;

  transition: opacity var(--transition-dur-func);
  overflow-y: scroll;

  .Bird {
    position: relative;
    width: 150px;
    height: 150px;

    .HairContainer {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      animation: rotateHair 1.5s infinite ease-in-out;

      .Hair {
        position: absolute;
        width: 50%;
        height: 100%;
        top: 0;
        left: 50%;
        background-color: #ea3d65;
        border-radius: 0 125px 125px 0;
      }
    }
    // ===================================================
    .Face {
      position: absolute;
      width: 70%;
      height: 70%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;

      .WhiteContainer {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;

        animation: rotateWhite 1.5s infinite ease-in-out;

        .White {
          position: absolute;
          width: 50%;
          height: 100%;
          top: 0;
          left: 50%;
          border-radius: 0 87.5px 87.5px 0;
          background-color: white;
        }
      }

      .ShadowContainer {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 2;
        animation: rotateShadow 1.5s infinite ease-in-out;

        .Shadow {
          position: absolute;
          width: 50%;
          height: 50%;
          top: 50%;
          left: 50%;
          background-color: rgba(220, 227, 229, 0.8);
          border-radius: 0 0 87.5px 0;
        }
      }

      .BigBeakContainer {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 3;
        animation: rotBigBeak 1.5s infinite ease-in-out;
      }

      .BigBeak {
        position: absolute;
        width: 50%;
        height: 50%;
        top: 0;
        left: 0;
        background-color: #f7ce42;
        border-radius: 87.5px 0 0 0;
      }
    }

    .SmallBeakContainer {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 0;
      animation: rotSmallBeak 1.5s infinite ease-in-out;

      .SmallBeak {
        position: absolute;
        width: 25%;
        height: 25%;
        top: 50%;
        left: 25%;
        background-color: #f3b249;
        border-radius: 0 0 0 43.25px;
      }
    }

    .Eye {
      position: absolute;
      width: 25%;
      height: 25%;
      bottom: 51%;
      left: 51%;
      background-color: #18233e;
      border-radius: 50%;
      z-index: 2;
      animation: moveEye 1.5s infinite ease-in-out;
    }
  }

  @keyframes rotateHair {
    0% {
      transform: rotate(-360deg);
    }
    15% {
      transform: rotate(-360deg);
    }
    35% {
      transform: rotate(-180deg);
    }
    65% {
      transform: rotate(-180deg);
    }
    85% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes rotateWhite {
    0% {
      transform: rotate(0deg);
    }
    15% {
      transform: rotate(0deg);
    }
    35% {
      transform: rotate(-180deg);
    }
    65% {
      transform: rotate(-180deg);
    }
    85% {
      transform: rotate(-360deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }

  @keyframes rotateShadow {
    15% {
      transform: rotate(0deg);
    }
    35% {
      transform: rotate(90deg);
    }
    65% {
      transform: rotate(90deg);
    }
    85% {
      transform: rotate(0deg);
    }
  }

  @keyframes rotBigBeak {
    15% {
      transform: rotate(0deg);
    }
    35% {
      transform: rotate(90deg);
    }
    65% {
      transform: rotate(90deg);
    }
    85% {
      transform: rotate(0deg);
    }
  }

  @keyframes rotSmallBeak {
    15% {
      transform: rotate(0deg);
    }
    35% {
      transform: rotate(-90deg);
    }
    65% {
      transform: rotate(-90deg);
    }
    85% {
      transform: rotate(0deg);
    }
  }

  @keyframes moveEye {
    15% {
      left: 51%;
      transform: translate(0px);
    }
    35% {
      left: 49%;
      transform: translate(-100%);
    }
    65% {
      left: 49%;
      transform: translate(-100%);
    }
    85% {
      left: 51%;
      transform: translate(0px);
    }
  }
`;
