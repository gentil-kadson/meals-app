import { Text } from "react-native";

function MealDetailScreen({ route }) {
  const { mealId } = route.params;

  return <Text>Meal Detail Screen! ({mealId})</Text>;
}

export default MealDetailScreen;
