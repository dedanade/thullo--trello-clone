const account = {
  boards: [
    {
      _id: 'B001',
      title: 'Thullo Challenge Board',
      cover:
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQ5NTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzY5MDcxNjI&ixlib=rb-1.2.1&q=80&w=1080',
      description: `Simple board to start on a project.

Each list can hold items (cards) that represent ideas or tasks.

There 4 lists here:

***Backlog** 🤔 : Ideas are created here. Here people can describe the idea following three simple questions: Why you wish to do it, What it is, how can you do it.

***In Progress**📚: Once the ideas is clearly defined, the task can move to #todo stage. Here the owner of the idea can move to #doing once s/he is ready. He can also wait a bit for other members to join.

***In Review** ⚙️: On-going

***Completed 🙌🏽**: Finished 

You could add other lists like labels
holding labels (with colors) in order to tag each card by a label if
 you wish`,
      members: [
        {
          _id: '001',
          name: 'Daniel Adebonojo',
          email: 'adebonojod@gmail.com',
          avatar: 'https://avatars.githubusercontent.com/u/66811981?v=4',
          role: 'Admin',
        },
        {
          _id: '002',
          name: 'Cherry Dan',
          email: 'jamesdan@gmail.com',
          avatar: 'https://randomuser.me/api/portraits/women/29.jpg',
          role: 'user',
        },
        {
          _id: '003',
          name: 'Lateef Jakande',
          email: 'lateoft@gmail.com',
          avatar: 'https://randomuser.me/api/portraits/men/80.jpg',
          role: 'user',
        },
      ],
      lists: [
        {
          _id: 'gst4sys6hs',
          name: 'Backlog 🤔',
          cards: [
            {
              _id: 'i8u6uyyr8y',
              title: 'Github jobs challenge',
              cover:
                'https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQ5NTF8MHwxfHNlYXJjaHwyfHxnaXRodWJ8ZW58MHx8fHwxNjM2NzE5Nzkx&ixlib=rb-1.2.1&q=80&w=1080',
              description: `Ideas are created and share here through a card. 
Here you can describe what you'd like to accomplish.
For example you can follow three simple questions to create the card related to your idea:

  * Why  ? (Why do you wish to do it ?)
  * What ? (What it  is it, what are the goals, who is concerned)
  * How  ? (How do you think you can do it ? What are the required steps ?)

After creation, you can move your card to the todo list.`,
              labels: [
                {
                  name: 'Technical',
                  color: 'rgba(33, 150, 83)',
                  background: 'rgba(33, 150, 83, 0.120)',
                },
                {
                  name: 'Github',
                  color: 'rgba(51, 51, 51)',
                  background: 'rgba(51, 51, 51, 0.120)',
                },
              ],
              attachments: [
                {
                  cover:
                    'https://images.unsplash.com/photo-1606166325695-ce4d64e3195f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQ5NTF8MHwxfHNlYXJjaHw0fHxhdHRhY2htZW50fGVufDB8fHx8MTYzNjcyMjEzNA&ixlib=rb-1.2.1&q=80&w=1080',
                  title: 'New Attachment',
                  date: '2021-11-16T18:32:36.461Z',
                },
                {
                  cover:
                    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQ5NTF8MHwxfHNlYXJjaHwxfHxtYW5hZ2VtZW50fGVufDB8fHx8MTYzNjY2ODQ2MQ&ixlib=rb-1.2.1&q=80&w=1080',
                  title: 'Another Attachment',
                  date: '2021-11-16T18:32:36.461Z',
                },
              ],
              comments: [
                {
                  user: {
                    _id: '001',
                    name: 'Daniel Adebonojo',
                    email: 'adebonojod@gmail.com',
                    avatar:
                      'https://avatars.githubusercontent.com/u/66811981?v=4',
                    role: 'Admin',
                  },

                  date: '2021-11-16T18:32:36.461Z',
                  comment: 'I love this',
                },
                {
                  user: {
                    _id: '002',
                    name: 'Cherry Dan',
                    email: 'jamesdan@gmail.com',
                    avatar: 'https://randomuser.me/api/portraits/women/29.jpg',
                    role: 'user',
                  },
                  date: '2021-11-16T18:32:36.461Z',
                  comment: 'I love this',
                },
              ],
              members: [
                {
                  _id: '001',
                  name: 'Daniel Adebonojo',
                  email: 'adebonojod@gmail.com',
                  avatar:
                    'https://avatars.githubusercontent.com/u/66811981?v=4',
                  role: 'Admin',
                },
                {
                  _id: '002',
                  name: 'Cherry Dan',
                  email: 'jamesdan@gmail.com',
                  avatar: 'https://randomuser.me/api/portraits/women/29.jpg',
                  role: 'user',
                },
              ],
            },
            {
              _id: 'gfghj776tg',
              title: 'Another Card Title',
              cover:
                'https://images.unsplash.com/photo-1427751840561-9852520f8ce8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQ5NTF8MHwxfHNlYXJjaHwyMXx8bWFuYWdlbWVudHxlbnwwfHx8fDE2MzY2Njg0NjE&ixlib=rb-1.2.1&q=80&w=1080',
              description: 'JJ',
              labels: [
                {
                  name: 'Technical',
                  color: 'rgba(47, 128, 237)',
                  background: 'rgba(47, 128, 237, 0.120)',
                },
              ],
              members: [
                {
                  _id: '001',
                  name: 'Daniel Adebonojo',
                  email: 'adebonojod@gmail.com',
                  avatar:
                    'https://avatars.githubusercontent.com/u/66811981?v=4',
                  role: 'Admin',
                },
              ],
            },
          ],
        },
        {
          _id: 'ghjkl74yh4',
          name: 'In Progress 📚',
          cards: [
            {
              _id: 'gyui97hjkk',
              title: `✋🏿 Move anything 'ready' here`,
              cover:
                'https://images.unsplash.com/photo-1558403194-611308249627?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQ5NTF8MHwxfHNlYXJjaHwyOXx8bWFuYWdlbWVudHxlbnwwfHx8fDE2MzY4Mjk0NTE&ixlib=rb-1.2.1&q=80&w=1080',
              description: `Ideas are created and share here through a card. 
Here you can describe what you'd like to accomplish.
For example you can follow three simple questions to create the card related to your idea:

  * Why  ? (Why do you wish to do it ?)
  * What ? (What it  is it, what are the goals, who is concerned)
  * How  ? (How do you think you can do it ? What are the required steps ?)

After creation, you can move your card to the todo list.`,
              labels: [
                {
                  name: 'Technical',
                  color: 'rgba(47, 128, 237)',
                  background: 'rgba(47, 128, 237, 0.120)',
                },
              ],
              members: [
                {
                  _id: '001',
                  name: 'Daniel Adebonojo',
                  email: 'adebonojod@gmail.com',
                  avatar:
                    'https://avatars.githubusercontent.com/u/66811981?v=4',
                  role: 'Admin',
                },

                {
                  _id: '003',
                  name: 'Lateef Jakande',
                  email: 'lateoft@gmail.com',
                  avatar: 'https://randomuser.me/api/portraits/men/80.jpg',
                  role: 'user',
                },
              ],
            },
          ],
        },
        {
          _id: 'jdghdjd645',
          name: 'In Review ⚙️',
          cards: [
            {
              _id: 'hyujhj8uje',
              title: '✋🏿 Move anything that is actually started here',
              cover: '',
              description: `Ideas are created and share here through a card. 
Here you can describe what you'd like to accomplish.
For example you can follow three simple questions to create the card related to your idea:

  * Why  ? (Why do you wish to do it ?)
  * What ? (What it  is it, what are the goals, who is concerned)
  * How  ? (How do you think you can do it ? What are the required steps ?)

After creation, you can move your card to the todo list.`,
              labels: [
                {
                  name: 'Concept',
                  color: 'rgba(242, 153, 74)',
                  background: 'rgba(242, 153, 74, 0.120)',
                },
                {
                  name: 'Technical',
                  color: 'rgba(79, 79, 79)',
                  background: 'rgba(79, 79, 79, 0.120)',
                },
              ],

              members: [
                {
                  _id: '001',
                  name: 'Daniel Adebonojo',
                  email: 'adebonojod@gmail.com',
                  avatar:
                    'https://avatars.githubusercontent.com/u/66811981?v=4',
                  role: 'Admin',
                },
              ],
            },
            {
              _id: 'pyut7uhht7',
              title: '✋🏿 Another Card You can Move',
              cover:
                'https://images.unsplash.com/photo-1546263463-02ec45e884fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQ5NTF8MHwxfHNlYXJjaHwyNHx8aW4lMjByZXZpZXd8ZW58MHx8fHwxNjM2NzI0MTIw&ixlib=rb-1.2.1&q=80&w=1080',
              description: `Ideas are created and share here through a card. 
Here you can describe what you'd like to accomplish.
For example you can follow three simple questions to create the card related to your idea:

  * Why  ? (Why do you wish to do it ?)
  * What ? (What it  is it, what are the goals, who is concerned)
  * How  ? (How do you think you can do it ? What are the required steps ?)

After creation, you can move your card to the todo list.`,
              labels: [
                {
                  name: 'Technical',
                  color: 'rgba(33, 150, 83)',
                  background: 'rgba(33, 150, 83, 0.120)',
                },
                {
                  name: 'Concept',
                  color: 'rgba(189, 189, 189)',
                  background: 'rgba(189, 189, 189, 0.120)',
                },
              ],
              attachments: [
                {
                  cover:
                    'https://images.unsplash.com/photo-1606166325695-ce4d64e3195f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQ5NTF8MHwxfHNlYXJjaHw0fHxhdHRhY2htZW50fGVufDB8fHx8MTYzNjcyMjEzNA&ixlib=rb-1.2.1&q=80&w=1080',
                  title: 'New Attachment',
                  date: '2021-11-16T18:32:36.461Z',
                },
                {
                  cover:
                    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQ5NTF8MHwxfHNlYXJjaHwxfHxtYW5hZ2VtZW50fGVufDB8fHx8MTYzNjY2ODQ2MQ&ixlib=rb-1.2.1&q=80&w=1080',
                  title: 'Another Attachment',
                  date: '2021-11-16T18:32:36.461Z',
                },
              ],
              comments: [
                {
                  user: {
                    _id: '001',
                    name: 'Daniel Adebonojo',
                    email: 'adebonojod@gmail.com',
                    avatar:
                      'https://avatars.githubusercontent.com/u/66811981?v=4',
                    role: 'Admin',
                  },

                  date: '2021-11-16T18:32:36.461Z',
                  comment: 'I love this',
                },
              ],
              members: [
                {
                  _id: '001',
                  name: 'Daniel Adebonojo',
                  email: 'adebonojod@gmail.com',
                  avatar:
                    'https://avatars.githubusercontent.com/u/66811981?v=4',
                  role: 'Admin',
                },
              ],
            },
          ],
        },
        {
          _id: 'yjkl876tgb',
          name: 'Completed 🙌🏽',
          cards: [
            {
              _id: 'pyuuuyhht7',
              title: '✋🏿 Move anything from doing to done here',
              cover:
                'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQ5NTF8MHwxfHNlYXJjaHw1fHxqb2IlMjBkb25lfGVufDB8fHx8MTYzNjcyMzU2OA&ixlib=rb-1.2.1&q=80&w=1080',
              description: `Ideas are created and share here through a card. 
Here you can describe what you'd like to accomplish.
For example you can follow three simple questions to create the card related to your idea:

  * Why  ? (Why do you wish to do it ?)
  * What ? (What it  is it, what are the goals, who is concerned)
  * How  ? (How do you think you can do it ? What are the required steps ?)

After creation, you can move your card to the todo list.`,
              labels: [
                {
                  name: 'Technical',
                  color: 'rgba(47, 128, 237)',
                  background: 'rgba(47, 128, 237, 0.120)',
                },
                {
                  name: 'Concept',
                  color: 'rgba(242, 201, 76)',
                  background: 'rgba(242, 201, 76, 0.120)',
                },
              ],
              attachments: [
                {
                  cover:
                    'https://images.unsplash.com/photo-1606166325695-ce4d64e3195f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQ5NTF8MHwxfHNlYXJjaHw0fHxhdHRhY2htZW50fGVufDB8fHx8MTYzNjcyMjEzNA&ixlib=rb-1.2.1&q=80&w=1080',
                  title: 'New Attachment',
                  date: '2021-11-16T18:32:36.461Z',
                },
                {
                  cover:
                    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQ5NTF8MHwxfHNlYXJjaHwxfHxtYW5hZ2VtZW50fGVufDB8fHx8MTYzNjY2ODQ2MQ&ixlib=rb-1.2.1&q=80&w=1080',
                  title: 'Another Attachment',
                  date: '2021-11-16T18:32:36.461Z',
                },
              ],
              comments: [
                {
                  user: {
                    _id: '001',
                    name: 'Daniel Adebonojo',
                    email: 'adebonojod@gmail.com',
                    avatar:
                      'https://avatars.githubusercontent.com/u/66811981?v=4',
                    role: 'Admin',
                  },

                  date: '2021-11-16T18:32:36.461Z',
                  comment: 'I love this',
                },
              ],
              members: [
                {
                  _id: '001',
                  name: 'Daniel Adebonojo',
                  email: 'adebonojod@gmail.com',
                  avatar:
                    'https://avatars.githubusercontent.com/u/66811981?v=4',
                  role: 'Admin',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  members: [
    {
      _id: '001',
      name: 'Daniel Adebonojo',
      email: 'adebonojod@gmail.com',
      avatar: 'https://avatars.githubusercontent.com/u/66811981?v=4',
      role: 'Admin',
    },
    {
      _id: '002',
      name: 'Cherry Dan',
      email: 'jamesdan@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/women/29.jpg',
      role: 'user',
    },
    {
      _id: '003',
      name: 'Lateef Jakande',
      email: 'lateoft@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/men/80.jpg',
      role: 'user',
    },
    {
      _id: '004',
      name: 'Sean Key',
      email: 'seankey@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/women/9.jpg',
      role: 'user',
    },
    {
      _id: '005',
      name: 'Aturo Elizabeth',
      email: 'ateli@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
      role: 'user',
    },
  ],
};

export function getBoards() {
  return account.boards;
}
export function getAccountMembers() {
  return account.members;
}
