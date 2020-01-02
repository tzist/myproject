const Post = require('models/post');

exports.write = async (ctx) => {
    const { title, body, tags } = ctx.request.body;

    const post = new Post({
        title, body, tags
    });

    try {
        await post.save(); // 데이터베이스에 등록
        ctx.body = post;   // 저장된 결과 반환
    } catch(e) {
        // 데이터베이스 오류 발생 시
        ctx.throw(e, 500);
    }
};

exports.list = async (ctx) => {
    try {
        const posts = await Post.find().exec();
        ctx.body = posts;
    } catch(e) {
        ctx.throw(e, 500);
    }
};

exports.read = async (ctx) => {
    const { id } = ctx.params;
    try {
        const post = await Post.findById(id).exec();

        // 포스트가 존재하지 않는 경우
        if (!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch(e) {
        ctx.throw(e, 500);
    }
};

exports.remove = async (ctx) => {
    const { id } = ctx.params;
    try {
        await Post.findByIdAndRemove(id).exec();
        ctx.status = 204;
    } catch(e) {
        ctx.throw(e, 500);
    }
};

exports.update = async (ctx) => {
    const { id } = ctx.params;
    try {
        const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
            new: true
            // 이 값을 설정해야 업데이트된 객체를 반환합니다.
            // 설정하지 않으면 업데이트되기 전의 객체를 반환합니다.
        }).exec();

        // 포스트가 존재하지 않을 때
        if(!post) {
            ctx.status = 404;
            return;
        }

        ctx.body = post;
    } catch(e) {
        ctx.throw(e, 500);
    }
};