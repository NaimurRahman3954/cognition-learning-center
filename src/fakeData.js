const courses = [
   {
     id: 1,
     title: 'C Programming for Beginners',
     url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg'
     difficulty-level: 'basic',
     duration: 10,
     students: 88,
     price: 1200,
   },
 
   {
     id: 2,
     title: 'Introduction to R Programming',
     url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/r/r-original.svg'
     difficulty-level: 'intermediate',
     duration: 8,
     students: 110,
     price: 1000,
   },
 
   {
     id: 3,
     title: 'Introduction to Database',
     url: 'https://cdn.worldvectorlogo.com/logos/amazon-database.svg'
     difficulty-level: 'basic',
     duration: 3,
     students: 87,
     price: 1000,
   },
 
   {
     id: 4,
     title: 'Advanced Java For Software Development',
     url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg'
     difficulty-level: 'advanced',
     duration: 48,
     students: 154,
     price: 2000,
   },
 
   {
     id: 5,
     title: 'Data Structures and Algorithm',
     url: 'https://hackr.io/tutorials/learn-data-structures-algorithms/logo/logo-data-structures-algorithms?ver=1587721467'
     difficulty-level: 'advanced',
     duration: 24,
     students: 637,
     price: 2000,
   },
 
   {
     id: 6,
     title: 'HTML5, CSS3 & Bootstrap4',
     url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg'
     difficulty-level: 'basic',
     duration: 8,
     students: 38100,
     price: 1200,
   },
 ]
 
 courses.map((course) => <Card key={course.id} course={course}></Card>)
