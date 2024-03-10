export type SEPARATOR_TYPE = 'slash' | 'chevron-right' | 'dash';
export type TARGET = '_blank' | '_parent' | '_self' | '_top';

export interface BreadcrumbItems {
  href?: string;
  text?: string;
  iconBefore?: boolean;
  iconAfter?: boolean;
  iconName?: string;
  target?: TARGET;
  icon?: string;
}
