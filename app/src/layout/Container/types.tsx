import { BaseComponent } from 'src/types/baseComponent';

interface ContainerProps extends BaseComponent {
  breakpoint?: string;
  fluid?: boolean;
  tag?: React.ComponentProps<any>;
}

export { ContainerProps };
