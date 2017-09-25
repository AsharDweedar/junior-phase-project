var mongo = require('mongodb').mongoClient // why mongoClient ?
mongo.connect(`mongodb://localhost:${process.env.PORT || 3000 }/TODOlist` , function (err, db) {
	if (err) {
		console.log('err : ', err);
	} else {
		exports.db = db ;
	}
})