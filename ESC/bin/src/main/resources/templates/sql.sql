select * from cosmetics;
select * from CMST_ING;

select * from csmt_ing where csmt_no like '%160395%';
select * from cosmetics;

select *, count from csmt_ing;

select csmt_name from COSMETICS where CSMT_NO like '%153883%';
select * from INGREDIENTS
where ing_seq in 
(select ing_seq from csmt_ing where csmt_no like '%153883%');