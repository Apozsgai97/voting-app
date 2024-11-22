export function RepresentativeForm() {
 return (
     <form action="submit">
       <label htmlFor="name">Name</label>
       <input type="text" name="name" id="name" placeholder="Adrienn Pozsgai" />
       <label htmlFor="email">Email</label>
       <input
         type="email"
         id="email"
         name="email"
         placeholder="adrienn.pozsgai@gmail.com"
       />
       <button type="submit">Add representative</button>
     </form>
 );
}
