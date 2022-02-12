import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { ButtonProps } from '../Button';
import { RneFunctionComponent } from '../helpers';
declare type ActiveTabItemStyle<T = {}> = ((active: boolean) => StyleProp<T>) | StyleProp<T>;
export declare type TabItemProps = Omit<ButtonProps, 'buttonStyle' | 'titleStyle' | 'containerStyle' | 'iconContainerStyle'> & {
    /** Allows to define if TabItem is active. */
    active?: boolean;
    /** Define the background Variant. */
    variant?: 'primary' | 'default';
    /**
     * Additional button style
     * @type `ViewStyle or (active: boolean) => ViewStyle`
     */
    buttonStyle?: ActiveTabItemStyle<ViewStyle>;
    /**
     * Additional button title style
     *  @type TextStyle or (active: boolean) => TextStyle
     */
    titleStyle?: ActiveTabItemStyle<TextStyle>;
    /**
     * Additional Styling for button container.
     * @type ViewStyle or (active: boolean) => ViewStyle
     */
    containerStyle?: ActiveTabItemStyle<ViewStyle>;
    /**
     * Additional Styling for Icon Component container.
     * @type ViewStyle or (active: boolean) => ViewStyle
     */
    iconContainerStyle?: ActiveTabItemStyle<ViewStyle>;
};
/**
 * They are individual item of the parent Tab.
 * They are clickable and allows users to click and change Tab.
 * Receives all [Button](https://reactnativeelements.com/docs/button#props) props.
 *  */
export declare const TabItem: RneFunctionComponent<TabItemProps>;
export {};
