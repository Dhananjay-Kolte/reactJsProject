import {
  TipOne,
  TipTwo,
  TipThree,
  TipFour,
} from '@/shared/assets/png/TipsPictures';

export const tips = [
  {
    altText: 'Tip one picture',
    color: 'green',
    image: TipOne,
    mainTitle: 'Package your cards carefully to prevent damage',
    number: 1,
    tip1: '- Your graded cards should already be in protective cases',
    tip2: '- Place each protected card in a padded envelope or similar enclosure',
    tip3: '- Pack the items in a NEW box using soft packing material',
    tip4: '- Secure the items so that they stay firmly in place in the box',
  },
  {
    altText: 'Tip two picture',
    color: 'orange',
    image: TipTwo,
    listTitle:
      'Collector’s insurance does NOT cover loss or damages during shipping to the vault. We strongly recommended that you purchase insurance from your shipping carrier to cover the value of your card(s) in transit.',
    mainTitle: 'About insurance',
    number: 2,
  },
  {
    altText: 'Tip three picture',
    color: 'blue',
    image: TipThree,
    listTitle:
      'We want to get your cards processed and deposited as quickly as possible. Please help us expedite this service:',
    mainTitle: 'QR codes and Tracking Information',
    number: 3,
    tip1: '- Print out the “Shipping Identifier” and include it with your cards',
    tip2: '- This QR code will help us identify your cards when we receive it',
    tip3: '- IMPORTANT: After shipping, return to your Shipments page and enter the tracking information from your shipping carrier',
  },
  {
    altText: 'Tip four picture',
    color: 'green',
    image: TipFour,
    listTitle:
      'Once we receive and process your cards, you will receive an email notification that your cards are ready for your final confirmation. ',
    mainTitle: 'Displaying your collectibles',
    number: 4,
    tip1: '- Return to your Shipments page one last time to confirm your deposit!',
    tip2: '- Collect and share your real cards in digital form',
    tip3: '- Display your collection publicly, safely, and securely, knowing that they are protected in our vault',
    tip4: '- Exhibit and sell your cards on our marketplace',
  },
];

export const selectBoldWords = (number: number, tip: string) => {
  if (number === 1)
    return (
      <p>
        - Your <strong>graded</strong> cards should already be in protective
        cases.
      </p>
    );
  if (number === 4)
    return (
      <p>
        - Return to your <strong>Shipments</strong> page one last time to mint
        your pNFTs!
      </p>
    );
  return <p>{tip}</p>;
};
