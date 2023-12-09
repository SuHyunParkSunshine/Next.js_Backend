export default function handler(req, res) {    
        let currentDateTime = new Date();
        res.status(200).json(currentDateTime)       
}