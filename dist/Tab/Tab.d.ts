import { StyleProp, ViewStyle, ViewProps } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export declare type TabBaseProps = ViewProps & {
    /** Child position index value. */
    value?: number;
    /** Makes Tab Scrolling */
    scrollable?: boolean;
    /** On Index Change Callback. */
    onChange?: (value: number) => void;
    /** Disable the indicator below. */
    disableIndicator?: boolean;
    /** Additional styling for tab indicator. */
    indicatorStyle?: StyleProp<ViewStyle>;
    /** Style for Tab container */
    containerStyle?: StyleProp<ViewStyle>;
    /** Define the background Variant. */
    variant?: 'primary' | 'default';
};
/**
 * Tabs organize content across different screens, data sets, and other interactions.
 *
 * :::note
 * This component is not for (complex) navigation. Use [React Navigation](https://reactnavigation.org) for that.
 * :::
 * %jsx <Tab.Item title="Tab 1" buttonStyle={(active)=>{backgroundColor: active ? 'red' : 'blue'}} />
 *
 *  */
export declare const TabBase: RneFunctionComponent<TabBaseProps>;
