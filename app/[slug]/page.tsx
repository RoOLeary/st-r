export default function Page({ params }:any){
    const { slug } = params; 
    return (
        <h1 className="uppercase">{slug} PAGE</h1>
    )
}