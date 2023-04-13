import Icons from '../../../../shared/icons/sprite.svg';

export const Icon = ({ name, width, height }) => (
  <svg width={width} height={height}>
    <use xlinkHref={`${Icons}#${name}`} />
  </svg>
);
