const User = require('../schema/user.schema');

module.exports.getUsersWithPostCount = async (req, res) => {
    try {
        //TODO: Implement this API
        var limit = parseInt(req.query.limit) || 10;
        var page = parseInt(req.query.page) || 1;
        var skip = limit * (page - 1);
        var totalDocs = await User.count();
        var totalPages = totalDocs / limit;


        const userData = await User.find({}).skip(skip).limit(limit);
        // console.log(userData);

        res.status(200).json({
            users: userData,
            pagination: {
                "totalDocs": totalDocs,
                "limit": limit,
                "page": page,
                "totalPages": totalPages,
                "pagingCounter": page,
                "hasPrevPage": page === 1 ? false : true,
                "hasNextPage": page < totalPages ? true : false,
                "prevPage": page === 1 ? null : page - 1,
                "nextPage": page < totalPages ? page + 1 : null
            }
        })
    } catch (error) {
        res.send({error: error.message});
    }
}