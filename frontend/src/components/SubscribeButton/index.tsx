import styles from './styles.module.scss';
interface SubscribeButtonProps {
  priceId: string;
  amount: number;
}

export function SubscribeButton({ amount, priceId }: SubscribeButtonProps) {
  return(
    <button type="button" className={ styles.subscribeButton }>
      HelpUs from { amount }
    </button>
  )
}