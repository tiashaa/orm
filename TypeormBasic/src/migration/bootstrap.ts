import { getRepository } from "typeorm"
import { Tweet } from "../entity/Tweet";
import { User } from "../entity/User"

export const Bootstrap= async ()=>{
    const userRepo = getRepository(User);
    const user = userRepo.create({firstName: "alexa", lastName:"Bryace", age:23});
    await userRepo.save(user).catch((err)=>{
        console.log("Error: ",err);
    });
    console.log("new user saved with id", user.id)

    const tweetRepo = getRepository(Tweet);
    const tweet = new Tweet();
    tweet.title="Welcome";
    tweet.content = "Hel;lo World";
    await tweetRepo.save(tweet).catch ((err)=>console.log(err));

}

export const find = async ()=>{
    const user = await getRepository(User)
    .createQueryBuilder("user")
    .where("user.firstName = :firstName", { firstName: "Alex" })
    .getOne();

console.log("Tweets: ", user.tweets);
}