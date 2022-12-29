import { Card } from '../../molecules';
import {
  Bath,
  ChangeBed,
  Emotions,
  FoodDrink,
  InclineBed,
  LayDown,
  NeedMedicine,
  NurseOrDoctor,
  Pain,
  SitUp,
  Tv,
} from '../../ions';

export default function CardsWrapper() {
  return (
    <div className="cardsWrapper">
      <Card icon={<InclineBed size="70" />} title="Incline Bed" />
      <Card icon={<LayDown size="70" />} title="Lay Down" />
      <Card icon={<SitUp size="70" />} title="Sit Up" />

      <Card icon={<NeedMedicine size="70" />} title="Need Medicine" />
      <Card icon={<NurseOrDoctor size="70" />} title="Nurse or Doctor" />
      <Card icon={<Pain size="70" />} title="In Pain" />

      <Card icon={<FoodDrink size="70" />} title="Food/Drink" />
      <Card icon={<Tv size="70" />} title="TV" />
      <Card icon={<Bath size="70" />} title="Bath" />

      <Card icon={<ChangeBed size="70" />} title="Change Bed" />
      <Card icon={<Emotions size="70" />} title="Emotions" />
      <Card title="Yes / No" />
    </div>
  );
}
