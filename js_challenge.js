var house = {
    areas: [{
        livingRoom: {
            items: ['tv','sofa']
        },
        bedroomOne: {
            items: ['bed','washing machine'],
            windows: 3
        },
        bedroomTwo:{
            items: ['bed','bed','desk'],
            windows: 4
        },
        kitchen:{
            items: ['fridge','broken chair']
        }
    }],
    
    garden: [true, 'Red Rose'],
    garage: {
        car: {
            color: 'red',
            wheels: 4,
            honk: ()=>{alert("Beep")}
        }
    }
}
    
    // JavaScript Challenge
    // Complete the following and upload the code as a new repo on GitHub. You can work with your teammates or use Google to help with the solution if you get stuck. Add each section as another code block and console.log the answer.

    //01 Find total number of areas in the house
    console.log("Challenge 01 - The house hase",Object.keys(house.areas[0]).length,"areas.");
    

    //02 Add a dining table to the living room
    house.areas[0].livingRoom.items.push('dining table');
    console.log("Challenge 02 - Following items are in the living room:",house.areas[0].livingRoom.items,".");


    //03 Add a stove to the kitchen
    house.areas[0].kitchen.items.push("stove");
    console.log("Challenge 03 - Following items are in the kitchen:",house.areas[0].kitchen.items ,".");


    //04 Remove the washing machine from bedroomOne
    house.areas[0].bedroomOne.items.pop();
    console.log("Challenge 04 - Following items are in the bedroom one:",house.areas[0].bedroomOne.items ,".");


    //05 Find the total number of beds in all rooms
    let bedCount = 0;
    for (let i=0; i < Object.keys(house.areas[0]).length; i++)
    {
        for (let j=0; j < house.areas[0][Object.keys(house.areas[0])[i]].items.length; j++)
        {
            if (house.areas[0][Object.keys(house.areas[0])[i]].items[j]=='bed')
            {
                bedCount++;
            };
        };
    };
    console.log("Challenge 05 - There are",bedCount,"beds in the house.");
    

    //06 Change the color of the car to blue
    house.garage.car.color='blue';
    console.log("Challenge 06 - The color of the car is:",house.garage.car.color)
    
    
    //07 Add a another car to the garage with a honk function
    // house.garage =
    // {
    //     car: {
    //         color: 'red',
    //         wheels: 4,
    //         honk: ()=>{alert("Beep")}
    //     },
    //     newCar: {
    //         honk: ()=>{alert("Beep")}
    //     }
    // }

    // let newCar = Object.create(house.garage.car);
    house.garage.newCar = Object.create(house.garage.car);
    console.log("Challenge 07 - This is in the garage:",house.garage);


    //08 Make the new car honk
    house.garage.newCar.honk();
    console.log("Challenge 08 - The newCar just honked.");


    //09 Change the 'broken chair' in the kitchen to 'new chair'
    house.areas[0].kitchen.items = house.areas[0].kitchen.items
    .map((item)=>{
        if(item == "broken chair"){
            return "new chair";
        } 
        else{
            return item;
        }
    })
    console.log("Challenge 09 - This is in the kitchen",house.areas[0].kitchen);

    
    //10 If the house has a garden, console.log the name of the flower
    if (house.garden[0]==true){
        console.log("Challenge 10 - The flowers in the garden are",house.garden[1]+".");
    };

