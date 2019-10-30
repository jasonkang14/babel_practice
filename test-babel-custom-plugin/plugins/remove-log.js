module.exports = function({ types: t }) {
    return {
        visitor: {
            ExpressionStatement(path) { 
                // adding a method to be called once Expression Statement node is made
                if (t.isCallExpression(path.node.expression)) {
                    // check if the expression property of the ExpressionStatement is CallExpression
                    if (t.isMemberExpression(path.node.expression.callee)) {
                        // check if the callee property is MemberExpression 
                        const memberExp = path.node.expression.callee;
                        if (
                            memberExp.object.name === 'console' &&
                            memberExp.property.name === 'log'
                            // check if the log method of the console object is called
                        ) {
                            path.remove();
                            // if all is fulfilled, remove the ExpressionStatement from AST
                        }
                    }
                }
            }
        }
    }
}