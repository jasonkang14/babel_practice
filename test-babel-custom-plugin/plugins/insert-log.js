module.exports = function({ types: t }) {
    return {
        visitor: {
            FunctionDeclaration(path) {
                // define the function to be called when FunctionDeclaration node is created
                if (path.node.id.name.substr(0, 2) === 'on') {
                    // check if the name of the function starts with `on`
                    path
                        .get('body')
                        .unshiftContainer(
                            // call the unshiftContainer method to add a node at the beginning of the `body` array
                            'body',
                            t.expressionStatement(
                                t.callExpression(
                                    t.memberExpresssion(
                                        t.identifier('console'),
                                        t.identifier('log'),
                                    ),
                                    [t.stringLiteral(`call ${path.node.id.name}`)],
                                ),
                            ),
                            // create the `console.log` node
                        )
                }
            }
        }
    }
}