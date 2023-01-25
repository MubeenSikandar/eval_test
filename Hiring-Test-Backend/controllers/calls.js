import postCalls from "../models/postCalls.js";

export const getCalls = async (req, res) => {
    try {
        const PostCalls = await postCalls.find();

        res.status(200).json(PostCalls)
    }
    catch (error) {
        res.status(404).json({ message: error.message });
        
    }
}

export const makeCalls = async (req, res) => {
    const call = req.body;

    const newCall = new postCalls(call);

    try {
        await newCall.save();

        res.status("201").json(newCall);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}