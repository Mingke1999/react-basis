stage1: mounting
    constructor: initialise state
    static  getDerivedStateFromProps() after virtual DOM before the atual DOM      
    render: create virtual DOM and processing diff algorithm (update DOM)
    componentDidMout render finished
stage2: update
    static  getDerivedStateFromProps() after virtual DOM before the atual DOM
    shouldComponentUpdate():bool //is DOM allowed to update optimise
    before update:getSnapshotBeforeUpdate()
    componentDidUpdate
stage3: uninstall
    componentWillUnmount