
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fitness Questionnaire</title>
</head>
<body>

<h2>Fitness Questionnaire</h2>

<form id="fitnessQuestionnaire">
    <fieldset>
        <legend>What types of physical activities do you enjoy? (Select all that apply)</legend>
        <input type="checkbox" id="walking" name="activity" value="walking">
        <label for="walking">Walking</label><br> 
        <input type="checkbox" id="running" name="activity" value="running">
        <label for="running">Running</label><br> 
        <input type="checkbox" id="cycling" name="activity" value="cycling">
        <label for="cycling">Cycling</label><br>
        <input type="checkbox" id="swimming" name="activity" value="swimming">
        <label for="swimming">Swimming</label><br>
        <input type="checkbox" id="weightlifting" name="activity" value="weightlifting">
        <label for="weightlifting">Weightlifting</label><br>
        <input type="checkbox" id="yoga" name="activity" value="yoga">
        <label for="yoga">Yoga</label><br>
        <input type="checkbox" id="teamSports" name="activity" value="teamSports">
        <label for="teamSports">Team sports (e.g., basketball, soccer)</label><br>
        <input type="text" id="otherActivity" name="activity" placeholder="Others">
    </fieldset>
    <fieldset>
        <legend>How would you describe your current diet?</legend>
        <input type="radio" id="plantBased" name="diet" value="plantBased">
        <label for="plantBased">Mostly plant-based</label><br>
        <input type="radio" id="mixed" name="diet" value="mixed">
        <label for="mixed">Balanced mix of meat and plant-based foods</label><br>
        <input type="radio" id="highProtein" name="diet" value="highProtein">
        <label for="highProtein">High in protein</label><br>
        <input type="radio" id="noSpecificDiet" name="diet" value="noSpecificDiet">
        <label for="noSpecificDiet">I don't follow a specific diet</label>
    </fieldset>
<fieldset>
        <legend>What is your height?</legend>
        <input type="radio" id="under5" name="height" value="under5">
        <label for="under5">Under 5'0" (152 cm)</label><br>
        <input type="radio" id="between5and5_5" name="height" value="between5and5_5">
        <label for="between5and5_5">5'0" to 5'5" (152 cm to 165 cm)</label><br>
        <input type="radio" id="between5_6and6" name="height" value="between5_6and6">
        <label for="between5_6and6">5'6" to 6'0" (166 cm to 183 cm)</label><br>
        <input type="radio" id="above6" name="height" value="above6">
        <label for="above6">Above 6'0" (183 cm)</label>
    </fieldset>
    <fieldset>
        <legend>What is your weight?</legend>
        <input type="radio" id="under120" name="weight" value="under120">
        <label for="under120">Under 120 lbs (54 kg)</label><br>
        <input type="radio" id="between120and160" name="weight" value="between120and160">
        <label for="between120and160">120 lbs to 160 lbs (54 kg to 72 kg)</label><br>
        <input type="radio" id="between161and200" name="weight" value="between161and200">
        <label for="between161and200">161 lbs to 200 lbs (73 kg to 90 kg)</label><br>
        <input type="radio" id="above200" name="weight" value="above200">
        <label for="above200">Above 200 lbs (90 kg)</label>
    </fieldset>
    <fieldset>
        <legend>What is your main fitness goal?</legend>
        <input type="radio" id="loseWeight" name="goal" value="loseWeight">
        <label for="loseWeight">Lose weight</label><br>
        <input type="radio" id="gainMuscle" name="goal" value="gainMuscle">
        <label for="gainMuscle">Gain muscle</label><br>
        <input type="radio" id="improveEndurance" name="goal" value="improveEndurance">
        <label for="improveEndurance">Improve endurance/stamina</label><br>
        <input type="radio" id="increaseFlexibility" name="goal" value="increaseFlexibility">
        <label for="increaseFlexibility">Increase flexibility</label><br>
        <input type="radio" id="maintainFitness" name="goal" value="maintainFitness">
        <label for="maintainFitness">Maintain current fitness level</label>
    </fieldset>
    <button type="button" onclick="submitForm()">Submit</button>
</form>

<div id="recommendation"></div>

<script>

    function submitForm() {
        const goal = document.querySelector('input[name="goal"]:checked').value;
        let recommendation = "Based on your selections, we recommend: ";
        let diet, workout;

        switch(goal) {
            case "loseWeight":
                recommendation += "a combination of cardio activities such as running or cycling, along with a balanced diet.";
                diet = "Balanced";
                workout = "Cardio";
                break;
            case "gainMuscle":
                recommendation += "weightlifting and resistance training, complemented by a protein-rich diet.";
                diet = "Protein";
                workout = "Weights";
                break;
            case "improveEndurance":
                recommendation += "regular endurance training activities like long-distance running or cycling, and a balanced diet with a good mix of carbohydrates and proteins.";
                diet = "Carbs";
                workout = "Endurance";
                break;
            case "increaseFlexibility":
                recommendation += "yoga or Pilates classes, focusing on stretching and flexibility exercises.";
                diet = "General";
                workout = "Flexibility";
                break;
            case "maintainFitness":
                recommendation += "a mix of moderate-intensity activities you enjoy, ensuring a balanced diet to support your lifestyle.";
                diet = "Balanced";
                workout = "Mixed";
                break;
            default:
                recommendation += "consulting a fitness professional for a plan tailored to your specific needs and goals.";
                diet = "Consult";
                workout = "Consult";
        }

       
       

       














       