export interface ICardProps {
  refs?: (node: HTMLElement | null) => void;
  card: ICard;
  selectCard?: (e: any, id: string) => void;
  selectedCards?: string[] | [];
  cartCards?: ICard[] | [];
  showSocials?: boolean;
  shareSocial?: (e: any) => void;
  closeSocialsOnBlur?: () => void;
  typePage?: TypesPage;
}
