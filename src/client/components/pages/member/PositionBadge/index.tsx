/** @jsxImportSource @emotion/react */
import { css } from '@emotion/core';
import * as React from 'react';
import { PositionType } from 'server/actors/Members/constants/position';
import { commonStyles } from 'client/styles/tokens';
import { componentElevationKey } from 'client/styles/tokens/elevation';
import { Typography } from 'client/components/atoms/Typography';
import { POSITION_STYLES } from 'client/styles/positionStyles';
import { getColorVarName } from 'client/styles/tokens/colors';

const NoneBadge: React.FC = () => {
  return (
    <div
      css={css`
        background-color: var(${getColorVarName('onBackground', 'variant1')});
        box-shadow: ${commonStyles.elevations[
          componentElevationKey.componentOnBackground
        ].boxShadow};
        z-index: ${commonStyles.elevations[
          componentElevationKey.componentOnBackground
        ].zIndex};
        height: 3px;
        margin: 11px 8px;
        width: 12px;
      `}
    />
  );
};

export type PositionBadgeProps = {
  position: PositionType;
};

export const PositionBadge: React.FC<PositionBadgeProps> = props => {
  const positionStyles = React.useMemo(() => {
    switch (props.position) {
      case PositionType.Center:
        return POSITION_STYLES.center;
      case PositionType.Fukujin:
        return POSITION_STYLES.fukujin;
      case PositionType.Selected:
        return POSITION_STYLES.selected;
      case PositionType.Under:
        return POSITION_STYLES.under;
      default:
        return undefined;
    }
  }, [props.position]);

  return (
    <div
      css={css`
        height: 28px;
        width: 28px;
      `}
    >
      {positionStyles !== undefined ? (
        <div
          css={css`
            border-radius: 50%;
            background-color: var(
              ${getColorVarName(
                positionStyles.backgroundColor,
                positionStyles.backgroundColorVariant
              )}
            );
            box-shadow: ${commonStyles.elevations[
              componentElevationKey.componentOnBackground
            ].boxShadow};
            z-index: ${commonStyles.elevations[
              componentElevationKey.componentOnBackground
            ].zIndex};
            border: 2px solid
              var(
                ${getColorVarName(
                  positionStyles.foregroundColor,
                  positionStyles.textColorVariant
                )}
              );
            height: 24px;
            line-height: 24px;
            text-align: center;
            width: 24px;
          `}
        >
          <Typography
            variant="body2"
            element="span"
            textColor={{
              on: positionStyles.foregroundColor,
              variant: positionStyles.textColorVariant,
            }}
            bold={positionStyles.bold}
          >
            {positionStyles.text}
          </Typography>
        </div>
      ) : (
        <NoneBadge />
      )}
    </div>
  );
};
