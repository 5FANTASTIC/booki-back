const express=require('express');
const cors = require('cors');
require('dotenv').config;
const mongoose= require( "mongoose");
const axios=require('axios')

const server=express();
server.use(cors());
server.use(express.json())
const PORT=3020


mongoose.connect('mongodb://localhost:27017/301Project', {useNewUrlParser: true, useUnifiedTopology: true});

const BookSchema  = new mongoose.Schema({
    title:String,
    authors: String,
    publisher: String,
    publishedDate: String,
    description: String,
    imageLinks: String,
    previewLink: String,
    buyLink: String,
    note:String
    
})


const Userchema = new mongoose.Schema({
    email:String,
    books:[BookSchema] 
})

const myUserModel=  mongoose.model('user',Userchema)

function seedUserColection(){
    const Ahmad=new myUserModel({
        email:'ahmad.alsyad92@gmail.com',
        books:[
            {   title:'Software Engineering: Technical, Organizational and Economic Aspects, an Arabic Textbook',
                authors: 'Hany Ammar',
                publisher: 'Lulu.com',
                publishedDate: '2006-02',
                description: 'This is an Arabic textbook on software engineering. To be used for classroom study and for self-study. Prerequisites include some understanding of programming, data structures, and algorithms',
                imageLinks: 'http://books.google.com/books/content?id=8A1lV35RQKUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                previewLink: 'http://books.google.jo/books?id=8A1lV35RQKUC&pg=PP441&dq=engineering&hl=&as_pt=BOOKS&cd=1&source=gbs_api',
                buyLink: 'https://play.google.com/store/books/details?id=5JCRDwAAQBAJ&rdid=book-5JCRDwAAQBAJ&rdot=1&source=gbs_api',
                note:'add your comment here',

            }
           
        ]
    })
    const noor=new myUserModel({
        email:'noor.hajbi@gmail.com',
        books:[
            {   title:'Software Engineering: Technical, Organizational and Economic Aspects, an Arabic Textbook',
                authors: 'Hany Ammar',
                publisher: 'Lulu.com',
                publishedDate: '2006-02',
                description: 'This is an Arabic textbook on software engineering. To be used for classroom study and for self-study. Prerequisites include some understanding of programming, data structures, and algorithms',
                imageLinks: 'http://books.google.com/books/content?id=8A1lV35RQKUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                previewLink: 'http://books.google.jo/books?id=8A1lV35RQKUC&pg=PP441&dq=engineering&hl=&as_pt=BOOKS&cd=1&source=gbs_api',
                buyLink: 'https://play.google.com/store/books/details?id=5JCRDwAAQBAJ&rdid=book-5JCRDwAAQBAJ&rdot=1&source=gbs_api',
                note:'add your comment here',

            }
           
        ]
    })
    const alaa=new myUserModel({
        email:'alaabbas97@gmail.com',
        books:[
            {   title:'Software Engineering: Technical, Organizational and Economic Aspects, an Arabic Textbook',
                authors: 'Hany Ammar',
                publisher: 'Lulu.com',
                publishedDate: '2006-02',
                description: 'This is an Arabic textbook on software engineering. To be used for classroom study and for self-study. Prerequisites include some understanding of programming, data structures, and algorithms',
                imageLinks: 'http://books.google.com/books/content?id=8A1lV35RQKUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                previewLink: 'http://books.google.jo/books?id=8A1lV35RQKUC&pg=PP441&dq=engineering&hl=&as_pt=BOOKS&cd=1&source=gbs_api',
                buyLink: 'https://play.google.com/store/books/details?id=5JCRDwAAQBAJ&rdid=book-5JCRDwAAQBAJ&rdot=1&source=gbs_api',
                note:'add your comment here',

            }
           
        ]
    })
    const amaraa=new myUserModel({
        email:'amaraalbalkhi@gmail.com',
        books:[
            {   title:'Software Engineering: Technical, Organizational and Economic Aspects, an Arabic Textbook',
                authors: 'Hany Ammar',
                publisher: 'Lulu.com',
                publishedDate: '2006-02',
                description: 'This is an Arabic textbook on software engineering. To be used for classroom study and for self-study. Prerequisites include some understanding of programming, data structures, and algorithms',
                imageLinks: 'http://books.google.com/books/content?id=8A1lV35RQKUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                previewLink: 'http://books.google.jo/books?id=8A1lV35RQKUC&pg=PP441&dq=engineering&hl=&as_pt=BOOKS&cd=1&source=gbs_api',
                buyLink: 'https://play.google.com/store/books/details?id=5JCRDwAAQBAJ&rdid=book-5JCRDwAAQBAJ&rdot=1&source=gbs_api',
                note:'add your comment here',

            }
           
        ]
    })
    const yahya=new myUserModel({
        email:'yahyazainab204@gmail.com',
        books:[
            {   title:'Software Engineering: Technical, Organizational and Economic Aspects, an Arabic Textbook',
                authors: 'Hany Ammar',
                publisher: 'Lulu.com',
                publishedDate: '2006-02',
                description: 'This is an Arabic textbook on software engineering. To be used for classroom study and for self-study. Prerequisites include some understanding of programming, data structures, and algorithms',
                imageLinks: 'http://books.google.com/books/content?id=8A1lV35RQKUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                previewLink: 'http://books.google.jo/books?id=8A1lV35RQKUC&pg=PP441&dq=engineering&hl=&as_pt=BOOKS&cd=1&source=gbs_api',
                buyLink: 'https://play.google.com/store/books/details?id=5JCRDwAAQBAJ&rdid=book-5JCRDwAAQBAJ&rdot=1&source=gbs_api',
                note:'add your comment here',

            }
           
        ]
    })
    
    Ahmad.save()
    noor.save()
    alaa.save()
    amaraa.save()
    yahya.save()
    
}
// seedUserColection() ;

// create resource http:localhost:3000/books?collectionsName=x
 
server.get('/collectionsBooks',getBooks);


function getBooks(request,response){
    // let emailrequest=request.query.email;
    let collectionsNames=request.query.collectionsName
    // let collectionsName=['math','engineering'];
    let collectionsName=collectionsNames.split(',');
    let collectionsData=[];
    promises=[];

    for(let i=0;i<collectionsName.length;i++){
        promises.push(           
                axios.get(`https://www.googleapis.com/books/v1/volumes?q=${collectionsName[i]}&printType=books&key=AIzaSyAqaI0FtyJqYBcWPNyNeOXhHNvQx7fTRA4&maxResults=20&inauthor=Hany`).then(result=>{

                    let BooksOfCollection=result.data.items.map(item=>{
                        return new bookdata(item)    
                    })     
                    collectionsData.push({
                        collectionName: collectionsName[i],
                        Books:BooksOfCollection    
                    })
                    // console.log(collectionsData)        
                }        
                )   
        )
     }
    Promise.all(promises).then(() => response.send(collectionsData));
   
}

server.get('/autherpublications',getAutherBooks)

function getAutherBooks(request,responce){
    // https://www.googleapis.com/books/v1/volumes?q=computer+inauthor:Daoliang%20Li&key=AIzaSyAqaI0FtyJqYBcWPNyNeOXhHNvQx7fTRA4

    let author=request.query.author;
    // let category=request.query.category;
    // let auther='singer';
    // let catagory='engineering';     

    
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=+inauthor:${author}&printType=books&key=AIzaSyAqaI0FtyJqYBcWPNyNeOXhHNvQx7fTRA4`).then(result=>{
        let AutherBooksList= result.data.items.map( item=>{

            return new bookdata(item) 
        }
        )
        console.log(AutherBooksList)
        responce.send(AutherBooksList)
    })
    
}
server.get('/advanceResearch',findBooks)

function findBooks(request,responce){
    // https://www.googleapis.com/books/v1/volumes?q=computer+inauthor:Daoliang%20Li&key=AIzaSyAqaI0FtyJqYBcWPNyNeOXhHNvQx7fTRA4
    
    let searchAndKey= request.query.searchAndKey
    // let author='Daoliang Li';
    // let topic='computer';
   //  for the fronEnd
    // q=search+inauthor:${author}
    // q=search+intitle::${title}
    // q=search+inpublisher:${publisher}
    // q=search+subject:${subject}
 

    try{
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchAndKey}&printType=books&key=AIzaSyAqaI0FtyJqYBcWPNyNeOXhHNvQx7fTRA4`).then(result=>{
            let AutherBooksList= result.data.items.map( item=>{
    
                return new bookdata(item) 
            }
            )
            console.log(AutherBooksList)
            responce.send(AutherBooksList)
        })
    }catch{
        console.log('there is an error')
    }
    
}

class bookdata{
    constructor(item){
        this.title=item.volumeInfo.title
        this.authors=item.volumeInfo.authors
        this.publisher=item.volumeInfo.publisher
        this.publishedDate=item.volumeInfo.publishedDate
        this.description=item.volumeInfo.description
        this.imageLinks=item.volumeInfo.imageLinks 
        this.previewLink=item.volumeInfo.previewLink 
        this.buyLink= item.saleInfo.buyLink 
        this.categories= item.volumeInfo.categories 
    }
}

// lab-013 post for adding books to the database 


server.get('/mybooks',getFavirouteList);
function getFavirouteList(req,resp){
   const email=req.query.email;
   myUserModel.find({email:email},(error,result)=>{
       if (error){
           console.log('There is an error')
       }else{

        console.log(result)
           
           

        resp.send(result[0].books)

           

       }
   })

}
server.post('/addBook',addBook);
function addBook(req,res){
   const {email,title, authors, publisher,publishedDate,description,imageLinks,previewLink,buyLink,category}=req.body;
   myUserModel.find({email:email},(error,result)=>{
       if (error){
           console.log('There is an error')
       }else{

        result[0].books.push(
            {   
            title:title,
            authors: authors,
            publisher: publisher,
            publishedDate: publishedDate,
            description: description,
            imageLinks: imageLinks,
            previewLink: previewLink,
            buyLink: buyLink,
            category:category,
            note:'add your comment here',
            }
        )
        result[0].save();

        res.send(result[0].books)

       }
   })

}

// delete book resourse 
server.delete('/deleteBook',deleteData);
function deleteData(req,res){
    // let index=Number(req.params.index);
    let {email,index}=req.query
    myUserModel.find({email:email},(error,result)=>{
        if (error){
            console.log('there is an error');
        }else{
            const modelAfterDelete=result[0].books.filter((book,id)=> {
                if(id !=index){
                    return book
                }
            })
            result[0].books=modelAfterDelete;
            result[0].save();
            res.send(result[0].books);
        }
    })
}  

server.put('/updateComment/:index',updateData)
function updateData(req,res){
    const index=req.params.index;
    const{ email, title,authors,publisher,publishedDate,imageLinks,previewLink,buyLink,note,description}=req.body;
    myUserModel.find({email:email},(error,result)=>{
        if( error){
            console.log('there is an erro')
        }else{
            result[0].books.splice(index,1,{
            title:title,
            authors: authors,
            publisher: publisher,
            publishedDate: publishedDate,
            description: description,
            imageLinks: imageLinks,
            previewLink: previewLink,
            buyLink: buyLink,
            note:note,
            })
            console.log(result[0].books)
            result[0].save();
            res.send(result[0].books);
        }
    })
}

// test 
server.get('/test',(req,res)=>{
    res.send('This is a test route');
    
})

server.listen(PORT,()=>{
    console.log('The PORT is active');

})

