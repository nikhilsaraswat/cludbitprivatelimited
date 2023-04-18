const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'POST': {
            return addResume(req, res);
        }
    }
}

// Adding a new post
async function addResume(req, res) {
    try {
        let { db } = await connectToDatabase();
        await db.collection('resume').insertOne(JSON.parse(req.body));
        return res.json({
            message: 'resume added successfully',
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}