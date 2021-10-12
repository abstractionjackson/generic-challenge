import path from 'path'
import { Low, JSONFile } from 'lowdb';

const __dirname = path.resolve();
console.log(__dirname)
const file = path.join(__dirname, 'db.json');
console.log(file)
const adapter = new JSONFile(file)
const db = new Low(adapter)

// db.data ||= {
//     email: new Set()
// } // glitch using node 14

await db.read();

db.data = db.data || { email: [] } 

export default db