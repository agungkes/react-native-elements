import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { ListItemBaseProps } from './ListItem';
import { RneFunctionComponent } from '../helpers';
export declare type ListItemSwipeableProps = ListItemBaseProps & {
    /**
     * Left Content.
     * @type ReactNode or resetCallback => ReactNode
     */
    leftContent?: React.ReactNode | ((reset: () => void) => React.ReactNode);
    /**
     *  Right Content.
     * @type ReactNode or resetCallback => ReactNode
     */
    rightContent?: React.ReactNode | ((reset: () => void) => React.ReactNode);
    /** Style of left container.
     * @type ReactNode or resetCallback => ReactNode
     */
    leftStyle?: StyleProp<ViewStyle>;
    /** Style of right container.
     * @type ReactNode or resetCallback => ReactNode
     */
    rightStyle?: StyleProp<ViewStyle>;
    /** Width to swipe left. */
    leftWidth?: number;
    /** Width to swipe right. */
    rightWidth?: number;
    /** Handler for swipe in either direction */
    onSwipeBegin?: (direction: 'left' | 'right') => any;
    /** Handler for swipe end. */
    onSwipeEnd?: () => any;
};
/** We offer a special kind of ListItem which is swipeable from both ends and allows users select an event. */
export declare const ListItemSwipeable: RneFunctionComponent<ListItemSwipeableProps>;
