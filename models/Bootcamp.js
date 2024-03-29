const mongoose = require('mongoose');

const BootcampSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please add a name"],
        unique: true,
        trim: true,
        maxlength:[50,"length can not be more than 50 character"]   
    },
    slug: String,
    description: {
        type: String,
        required: [true, "Please add a description"],
        maxlength:[500,"length can not be more than 500 character"]   
     
    },
    website:{
        type: String,
        match:[ https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)
           ,'Please use a valid URL with HTTP or HTTPS'
        ]   
    },
    phone:{
        type:String,
        maxlength:[10,"length can not be more than 10 character"]
    },
    email:{
        type:String,
        match:[ /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please use a valid Email'
        ]
    },
    address:{
        type:String,
        required: [true,"Please add an address"]
    },
    location:{
        //GeoJson Point
        type:{
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates:{
            type: [Number],
            required: true,
            index: '2dshpere'
        },
        formattedAddress:String,
        stree: String,
        city: String,
        state: String,
        zipcode: String,
        country: String
    },
    careers:{
        //array of strings
        type: [String],
        required:true,
        enum:[
            'Web Development',
            'Mobile development',
            'UI/UX',
            'Data Science',
            'Business',
            'Other'
        ]
    },
    averageRating:{
        type: Number,
        min:[1,'Rating must be at least 1'],
        max:[10,'Rating can no be more than 10']
    },
    averageCost:Number,
    photo:{
        type:String,
        default:'no-photo.jpg'
    },
    housing:{
        type:Boolean,
        default: false
    },
    jobAssistance:{
        type:Boolean,
        default: false
    },
    jobGuarantee:{
        type:Boolean,
        default: false
    },
    acceptGi:{
        type:Boolean,
        default: false
    },
    createdAt:{
        type:Date,
        default: Date.now
    },
});

module.exports = mongoose.model('bootcamps',BootcampSchema);