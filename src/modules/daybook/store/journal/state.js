export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Etiam fringilla posuere nisl ut porta. Fusce venenatis sollicitudin feugiat. Phasellus et quam tellus. Donec erat enim, interdum eget est at, dignissim placerat dui. Cras in urna id turpis euismod tincidunt. Quisque a molestie felis, ut convallis mi. Quisque volutpat, justo in aliquet lobortis, mi metus lacinia lectus, in maximus felis lacus vel nulla. Praesent nec orci in sapien feugiat rhoncus in eget neque. Nulla a elit risus. Nullam sed sapien in elit varius pretium sit amet id dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum pellentesque libero eu gravida sagittis. Donec id nunc vel lorem fringilla commodo volutpat vitae odio. Sed quis metus nunc. Vivamus sem orci, porta ac finibus vitae, blandit hendrerit lorem.',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Quisque eros quam, interdum ut vestibulum vel, eleifend et lacus. Nullam maximus vulputate metus sit amet vulputate. Integer rhoncus libero quis elit blandit lobortis. Aenean porttitor erat ut vestibulum ultrices. Proin volutpat tortor ac augue sodales tristique molestie at nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque nunc massa, lobortis sed lectus vel, aliquet pulvinar magna. In mattis blandit tincidunt. In nec est mollis, luctus ligula id, cursus lacus. Cras suscipit tempor ex ac venenatis.',
            picture: null,
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Phasellus ornare consequat ante a viverra. Quisque ornare mauris at purus tincidunt, ut porta ipsum pulvinar. Maecenas dapibus, ipsum a vehicula porttitor, velit orci luctus nibh, sed aliquam risus dui nec felis. Donec ut magna non purus semper rutrum sed scelerisque velit. Morbi sit amet vulputate lectus. Quisque condimentum ullamcorper accumsan. Sed pulvinar neque eu dui rutrum, et sodales nisl placerat. Sed est risus, gravida nec porta nec, molestie a magna.',
            picture: null,
        },
    ],
})
