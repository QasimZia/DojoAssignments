var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./static'));
app.set('views', './views');
app.set('view engine', 'ejs');

var server = app.listen(8000, function(){
    console.log('Listening on port 8000');
})

mongoose.connect('mongodb://localhost/message_board_beg');
var Schema = mongoose.Schema

//schemas
var PostSchema = new Schema({
    userName: {type: String, required: true},
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
    content: {type: String, required: true},
}, {timestamps: true});

mongoose.model('Post', PostSchema);
var Post = mongoose.model('Post');

var CommentSchema = new Schema({
    userName: {type: String, required: true},
    _post: {type: Schema.Types.ObjectId, ref: 'Post'},
    content: {type: String, required: true},
}, {timestamps: true});

mongoose.model('Comment', CommentSchema);
var Comment = mongoose.model('Comment');

app.get('/', function(req, res){
    Post.find({})
    .populate('comments')
    .exec(function(err, posts){

        res.render('index', {posts: posts});
    })

})

app.post('/posts', function(req, res){
    var newPost = new Post(req.body);

    newPost.save(function(err){
        if(err) {

            res.render('index', {errors: newPost.errors});
        } else {

            res.redirect('/');
        }
    })
})

app.post('/posts/:id', function(req, res){
    Post.findOne({_id: req.params.id}, function(err, post){
        var comment = new Comment(req.body);

        comment._post = post._id;
        comment.save(function(err){
            post.comments.push(comment);
            post.save(function(err){
                if(err){
                    console.log('error');
                } else {
                    res.redirect('/');
                }
            })
        })
    })

})